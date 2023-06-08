import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            price: price,
            service: title,
            service_id: _id
        }
        console.log(booking);

        fetch('https://car-doctor-server-iota-five.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Service Booked Successfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-2xl'><span className='font-bold'>Service :</span> <span className='font-semibold text-[#FF3811]'>{title}</span></h2>

            <div className="card-body">
                <form onSubmit={handleCheckOut}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='name' className="input input-bbookinged" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bbookinged" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bbookinged" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bbookinged" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] text-white bbooking-none" type="submit" value="booking Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;