import { Button } from '../../components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 to-orange-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-orange-100 rounded-xl shadow-xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls autoPlay  playsInline
            className="w-full h-full object-cover"
            poster="/poster-1.jpeg"
          >
            <source src="/shrihari-invite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8">
          <Button href="/anusha-invite.pdf">E-Invite</Button>
          <Button href="https://maps.app.goo.gl/VDBmxqeG9LrB7NMY6">Location</Button>
        </div>
      </div>
    </div>
  )
}

