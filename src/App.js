import { useEffect, useState } from 'react';
import './App.css';
import Video from './Component/Video';

import db from './firebase';
import {collection, getDocs} from 'firebase/firestore/lite'
function App() {
  const[post,setPost] = useState([]);
 
  useEffect (() =>{
   // db.collection('posts').onSnapshot((snapshot) => setPost([snapshot.docs.map(doc=>doc.data())]))
   async function alldata(){
    const All_posts = collection(db,'posts');
    const snap = await getDocs(All_posts);
    console.log(snap.docs.map(doc => doc.data()));
    setPost(snap.docs.map(doc => doc.data())) 
   }  
   alldata();
  }, [])
  return (
    //bem
    <div className="app">
      <h1>Lets Build tiktok clone</h1>
      <div className="app_videos">
        {console.log(post)}
        {post.map(({caption,likes,messages,shares,song,src,username})=>(
            <Video
            key={likes+1}
            username={username}
            caption={caption}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
            src={src}
            />
        ))}
      

        
      </div>
    </div>
  );
}

export default App;


/*https://vod-progressive.akamaized.net/exp=1639299885~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2134%2F17%2F435674472%2F1898999730.mp4~hmac=f8f49b6ca8ce1abe4c8cf6b12fe8431c877d8b02bae1ec384fc5f06877ea656f/vimeo-prod-skyfire-std-us/01/2134/17/435674472/1898999730.mp4?filename=production+ID%3A4812203.mp4
https://media.istockphoto.com/videos/calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-video-id864526000
https://vod-progressive.akamaized.net/exp=1639299995~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1392%2F19%2F481961800%2F2156756070.mp4~hmac=723ebb489f58419695ab6a5f07012c9698d96e235f055fc90d7ad6a285e90bfd/vimeo-prod-skyfire-std-us/01/1392/19/481961800/2156756070.mp4?filename=pexels-sarowar-hussain-5946371.mp4
https://vod-progressive.akamaized.net/exp=1639300045~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F260%2F26%2F651300116%2F2988750541.mp4~hmac=c14211526c07e007615538e8a4dccaefc18949b421472e05e293a5f5ce977cee/vimeo-prod-skyfire-std-us/01/260/26/651300116/2988750541.mp4?filename=pexels-ahmet-bozku%C5%9F-10391751.mp4
https://vod-progressive.akamaized.net/exp=1639300128~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F685%2F13%2F328427476%2F1287380097.mp4~hmac=9908b894d9454b40839396a41acf6e2ff61ba58754a7ba2f6a2d15d206047ba6/vimeo-prod-skyfire-std-us/01/685/13/328427476/1287380097.mp4?filename=Pexels+Videos+2098988.mp4
*/

/*sounds 
#beach water
https://vod-progressive.akamaized.net/exp=1639300291~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3443%2F18%2F467216286%2F2074770403.mp4~hmac=196c1074747c1239425e9b1a0165a60e9ea8320f01969f2f3099d31ed732bc14/vimeo-prod-skyfire-std-us/01/3443/18/467216286/2074770403.mp4?filename=pexels-nicolaas-van-der-walt-5580688.mp4
https://vod-progressive.akamaized.net/exp=1639300329~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1887%2F19%2F484435905%2F2169306761.mp4~hmac=a4818a2b6655749aacc69f78d67a1667d686460ec3c4e98a2085f7b442f614db/vimeo-prod-skyfire-std-us/01/1887/19/484435905/2169306761.mp4?filename=pexels-peggy-anke-6004487.mp4
https://vod-progressive.akamaized.net/exp=1639300359~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F376%2F22%2F551883455%2F2610708191.mp4~hmac=6f5a00bc20170a945ec49e67af59011d4834fecdd4ce4497282c0f341f19d858/vimeo-prod-skyfire-std-us/01/376/22/551883455/2610708191.mp4?filename=pexels-amine-m%27siouri-7940611.mp4
https://vod-progressive.akamaized.net/exp=1639300403~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2088%2F18%2F460443004%2F2036500724.mp4~hmac=94a8c5bbf2bbce86751a3d3b49ec35a57dbec04482b18fe3b765550c1f7eafec/vimeo-prod-skyfire-std-us/01/2088/18/460443004/2036500724.mp4?filename=pexels-peggy-anke-5414256.mp4
#animals
https://vod-progressive.akamaized.net/exp=1639300471~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3582%2F17%2F442911176%2F1939445165.mp4~hmac=ef7a3008e91c4d95a16deb3d82547155d2a4c5429fc4d0bc35cf7adb4e7933bb/vimeo-prod-skyfire-std-us/01/3582/17/442911176/1939445165.mp4?filename=production+ID%3A4984826.mp4
https://vod-progressive.akamaized.net/exp=1639300613~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1791%2F25%2F633956375%2F2910538992.mp4~hmac=6593fcb47d35f87bff27a1a27f13c080d528362fa359862b18d7fa66ca0bf91e/vimeo-prod-skyfire-std-us/01/1791/25/633956375/2910538992.mp4?filename=pexels-tim-photoman-9922066.mp4
https://vod-progressive.akamaized.net/exp=1639300676~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2371%2F18%2F461856844%2F2044498059.mp4~hmac=741827a20450b6ab102a9963556e7eff232d27c29033f749fbb45063683fb736/vimeo-prod-skyfire-std-us/01/2371/18/461856844/2044498059.mp4?filename=pexels-shah-jahan-5446310.mp4




<Video 
            username="sunil45" 
            caption="i love react" 
            song="believe in yourself this is me yoo"
            shares={211}
            likes={999}
            messages={445}
            src="https://vod-progressive.akamaized.net/exp=1639300676~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2371%2F18%2F461856844%2F2044498059.mp4~hmac=741827a20450b6ab102a9963556e7eff232d27c29033f749fbb45063683fb736/vimeo-prod-skyfire-std-us/01/2371/18/461856844/2044498059.mp4?filename=pexels-shah-jahan-5446310.mp4"
            />
*/