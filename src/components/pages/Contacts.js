import { useHistory } from "react-router-dom";



function Contacts() {
    const history = useHistory();
    return (
        <div className="pt-24 bg-gradient-to-br from-neon1-light-1000 to-neon1-light-500 w-full h-screen">
            <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-neon1-light-600 rounded-md my-20 p-8">
                <h4 className="text-blue-500 font-bold text-2xl text-center">Contacts</h4>
                <p className="font-medium text-lg font-serif text-center">Email: example@mail.com</p>
                <p className="font-medium text-lg font-serif text-center">Dynamic Solution Innovators Ltd.<br/>177, 2nd Lane, New DOHS, Mohakhali,<br/>Dhaka 1206, Bangladesh.</p>
                <button onClick={() => history.push('/')} className="bg-blue-500 text-blue-200 p-2 rounded-lg font-semibold text-xl">Go Home</button>
            </div>
        </div>
    )
}

export default Contacts;