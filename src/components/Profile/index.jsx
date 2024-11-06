import styles from './profile.module.css'

export default function Profile({ avatar, name, bio, email, phone, githubUrl, instagramUrl }) {
    return (
        <div className="block">
            <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
            <div className="texto">
                <h2 className="profile-name">{name}</h2>
                <hr />
                <p className="profile-bio">{bio}</p>
                <hr />
                <p className="profile-contact">Email: <a href={`mailto:${email}`}>{email}</a></p>
                <hr />
                <p className="profile-contact">Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                <div className="profile-social">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                       <div className='btn'>
                         <button>GitHub</button><br />
                        <button>Instagram</button>
                        </div>
                    </a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                        
                        <div className='btn'>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}