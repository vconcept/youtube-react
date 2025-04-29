import { videos } from '../asset/videolist.js';


const Mainvid = () => {
    return (
        <div>
            {videos.map((clip) => (
            <div key={clip.id}>
                <h1>{clip.title}</h1>
                <div>
                    <img src={clip.image} alt="first vid"/>
                </div>
                <h2>{clip.account_name}</h2>
            </div>
        )
    )}
        </div>

    );
};

export default Mainvid;