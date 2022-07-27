import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center mt-20">
      <span>Page not found &nbsp;</span>
      <span
        className=" text-orange-600 cursor-pointer font-bold"
        onClick={() => navigate('/')}
      >
        back to Home Page
      </span>
    </div>
  )
}
