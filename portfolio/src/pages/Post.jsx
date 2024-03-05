import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'
import {Link, NavLink} from 'react-router-dom'


function Post() {

   const [postData,setPost]=useState(null);


   useEffect(()=>{
    sanityClient
          .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`)
          .then((data)=>setPost(data))
          .catch(console.error);
   },[])

  return (
    <div className='bg-green-100 min-h-screen p-12'>
     <div className="container mx-auto">
     <h1 className='capitalize flex text-5xl justify-center'>Blog post page</h1>
      <h2 className='text-lg text-gray-600 flex justify-center mb-12'> Welcome to my page of blog posts</h2>
      <div className="grid mg:grid-cols-2 lg:grid-cols-3 gap-8">

        {postData && postData.map((post,index)=>(
        <article>
          <Link to={'/post/'+post.slug.current} key={'/post/'+post.slug.current}>
          <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400' key={index}>
            <img src={post.mainImage.asset.url} alt="" className='w-full h-full rounded-r object-cover absolute'/>
            <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
              <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded '> {post.title}</h3>
            </span>
          </span>
          </Link>
        </article>
    )) }
      </div>
     </div>
    </div>
  )
}

export default Post
