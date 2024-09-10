import React from 'react'

const Sarath = () => {
// const menfash = usecontext(info)
// console.log(menfash)
    const menfash = [{cat_name:"men"}, {cat_name:"women"}];
    console.log(menfash)


  return (
    <div>
  
     {menfash.map((data, index) => (
        <p key={index}>{data.cat_name}</p>
      ))}
    </div>
  )
}

export default Sarath


