import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLoading } from "../../Context/LoadingContext";


const RouteChangeLoader = () => {

    const location = useLocation()
    const {setLoading} = useLoading()

    useEffect(() => {
        setLoading(true)

        const timeout = setTimeout(() => {
            setLoading(false)
        }, 0)

        return () => clearTimeout(timeout)

    },[location])


  return null
}

export default RouteChangeLoader
