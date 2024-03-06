import React, { useEffect, useState } from 'react'
import sanityClient from "../client";
import image from '../component/images/bg-image.jpg'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
 function urlFor(source){
  return builder.image(source)
 }


function About() {

  const [author,setAuthor] = useState(null);

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`).then((data)=>setAuthor(data[0]))
    .catch(console.error);
  },[])

  if (!author) return <div className="">Loading...</div>

  return (
    <div className='relative'>
      <img src={image} className='absolute w-full' alt="" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img src={urlFor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' alt="" />
          <div className="text-lg flex flex-col justify-center">
            <h1 className='text-6xl text-green-300 mb-4'>
              Hey there, I'm {" "}
              <span className='text-green-100'>
                {author.name}
              </span>
            </h1>
            <div className="text-white">
            <BlockContent blocks={author.bio} projectId="4hren16s" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
