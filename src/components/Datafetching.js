import React, {useState, useEffect}from 'react'
import axios from 'axios'

function Datafetching() {
    const [posts, setPosts] = useState({})
    const[id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)


const handleClick = ()=> {
    setIdFromButtonClick(id)
}

useEffect(() => {
    axios
    .get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}  />
            <button type="button" onClick={handleClick}>Fetch Post </button>
     <div>{posts.title}</div>
        {/*   <ul>
               {
                   posts.map(post => ( <li key={post.id}>{post.title}
                   </li>))
               }
            </ul> */}
        </div>
    )
}

export default Datafetching
