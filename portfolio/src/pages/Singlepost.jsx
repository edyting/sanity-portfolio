import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import {useParams} from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from '@sanity/block-content-to-react';
 
const builder = imageUrlBuilder(sanityClient);
 function urlFor(source){
  return builder.image(source)
 }



function Singlepost() {
  const [singlepost,setSinglePost] = useState(null);
  const {slug} =useParams();

  useEffect(()=>{
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name":author->name,
      "authorImage": author->image
    }`).then((data)=>setSinglePost(data[0]))
    .catch(console.error);
  },[])
  

  if(!singlepost) return <div className="">Loading...</div>
  return (
    <div className='bg-gray-200 min-h-screen p-12'>
        <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
          <header className='relative'>
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              <div className="bg-white bg-opacity-75 rounded p-12">
                <h1 className='text-3xl lg:text-6xl mb-4'> {singlepost.title}</h1>
                <div className="flex justify-center text-gray-800">
                  <img src={urlFor(singlepost.authorImage).url()} alt="" className='w-10 h-10 rounded-full' />
                  <p className='flex items-center pl-2 text-2xl'>
                    {singlepost.name}
                  </p>
                </div>
                
              </div>
            </div>
            <img src={singlepost.mainImage.asset.url} alt="" className='w-full object-cover rounded-t h-[400px]' />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 uppercase"><BlockContent blocks={singlepost.body} projectId="4hren16s" dataset="production" />
            
        </div>
        </article>
      
    </div>
  )
}

export default Singlepost
