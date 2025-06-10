import { Button } from 'reactstrap'

export default function ProjectDetails({ title, subtitle, description, tech, concepts, image, screenshot, story, signIn, link }) {
    return (
        <div style={{ color: 'white' }}>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{description} </p>
            <strong>TECH:</strong><p>{tech}</p>
            <strong>CONCEPTS:</strong><p>{concepts}</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>LOGO:</strong><img src={image} height='150px' width="auto" style={{ padding: '10px' }} />
                <strong>SCREENSHOT:</strong><img src={screenshot} height='300px' width="auto" style={{ padding: '30px' }} />
            </div>
            <div>
                <h5>Story</h5>
                <p>{story}</p>
            </div>
            <p>If you'd like to try the app, login using email:</p>
            {signIn}
            <Button
                className="btn-link"
                color="twitter"
                href={link}
                target="_blank"
                style={{ float: 'right' }}
            >
                GO TO DEPLOYED APP
            </Button>
        </div>
    )
}
