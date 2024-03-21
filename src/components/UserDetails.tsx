import React, {useEffect, useState} from "react";

interface  UserDetail {
    id: number;
    name: {
        firstname: string;
        lastname: string;
    };
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        number: string;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    }
}
const UserDetails : React.FC =  () => {
    const id = 1;
    const [user, setUser] = useState<UserDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`);
                const responseData = await response.json();
                setUser(responseData);
                setLoading(false)

            } catch (error) {
                console.error("Error fetch user info", error);

            }
        }
        fetchUserDetails();
    }, [id])
    return (
        <div className="container mx-auto">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : user ? (
                <div className="mt-40 md:mt-20 bg-white shadow-md p-8 max-w-2xl mx-auto text-left">
                    <h1 className="font-bold text-center mb-8">User Details</h1>
                    <div className="mb-4">
                        <strong className="text-gray-700">First Name:</strong>{" "}
                        {user.name.firstname}
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Last Name:</strong>{" "}
                        {user.name.lastname}
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Email:</strong> {user.email}
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Phone:</strong> {user.phone}
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Address:</strong>
                        <p className="mx-8">{user.address.street}</p>
                        <p className="mx-8">{user.address.city}</p>
                        <p className="mx-8">{user.address.number}</p>
                        <p className="mx-8">{user.address.zipcode}</p>
                        <p className="mx-8">
                            geolocation: {user.address.geolocation.lat},{" "}
                            {user.address.geolocation.long}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-500">User not found</div>
            )}
        </div>

    )
}

export default UserDetails;