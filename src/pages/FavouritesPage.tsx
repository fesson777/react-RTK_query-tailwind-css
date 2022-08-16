import { useActions } from '../hooks/actions'
import { useAppSelector } from '../store/hooks'

export default function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github)
  const { removeFavourite } = useActions()

  if (favourites.length === 0) return <p className="text-center">No items.</p>

  function handler(payload: string) {
    removeFavourite(payload)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f: string) => (
          <li key={f}>
            <button
              onClick={() => handler(f)}
              className="px-2 rounded-full bg-black mr-2 text-white"
            >
              X
            </button>
            <a href={f} target="_blank" rel="noreferrer">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
