import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("../pages/Home"))

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><p>Loading...</p></div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
