import { useHistory } from "react-router-dom";



function NotFoundPage() {
    const history = useHistory();
    
    return (
        <div className="pt-24 bg-gradient-to-br from-neon1-light-1000 to-neon1-light-500 w-full h-screen">
            <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-neon1-light-600 rounded-md my-20 p-8">
                <h4 className="text-red-500 font-bold text-2xl text-center">Opps! Page not Found</h4>
                <p className="font-medium text-lg font-serif text-center">Please ensure the URL is correct and try again, Or go to Homepage.</p>
                <button onClick={() => history.push('/')} className="bg-blue-500 text-blue-200 p-2 rounded-lg font-semibold text-xl">Go Home</button>
            </div>
        </div>
    )
}

export default NotFoundPage;