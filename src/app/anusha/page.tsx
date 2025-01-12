import { Button } from '../../components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 to-orange-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-orange-100 rounded-xl shadow-xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls autoPlay
            className="w-full h-full object-cover"
            poster="/poster-2.jpeg"
          >
            <source src="/anusha-invite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 p-8">
          <Button href="/shrihari-invite.pdf">E-Invite</Button>
          <Button href="https://maps.app.goo.gl/VDBmxqeG9LrB7NMY6">Location</Button>
        </div>
      </div>
    </div>
  )
}

