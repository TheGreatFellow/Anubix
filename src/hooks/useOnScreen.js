import { useEffect, useState } from 'react'

const useOnScreen = (ref) => {
    const [intersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.intersecting ?? false)
            },
            {
                threshold: 0.5,
            }
        )
        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                observer.observe(currentRef)
            }
        }
    }, [ref])
    return intersecting
}

export default useOnScreen
