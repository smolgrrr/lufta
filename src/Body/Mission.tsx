import React from 'react';

const Mission: React.FC = () => {

    return (
        <div className="text-left p-3 sm:p-5 md:p-8 lg:p-12">
            {/* Mission */}
            <div className='p-4 sm:p-6 lg:p-8 px-4 sm:px-8 lg:px-16 '>
                <h1 id="our-mission" className='font-medium text-xl sm:text-2xl'>
                    Our Mission: 
                </h1>
                <p className='text-xl sm:text-xl lg:text-4xl font-normal lg:font-medium mb-2 sm:mb-4 lg:mb-8'>Making everywhere on Earth easily accessible- connecting every maker to global trade from anywhere.</p>
            </div>

            {/* Customers */}
            <div className="w-full h-0.5 bg-black my-4"></div>
            <div className="py-8 sm:py-12 lg:py-16">
                <div id="our-customers" className='font-medium text-xl sm:text-2xl pl-4 sm:pl-8 lg:pl-16 pb-4'>Our Customers:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
                    <div className='text-start px-4 sm:px-8 lg:px-16 pb-8'>
                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-8 lg:mb-16">Freight</p>
                        <div className='p-2'>
                        <p className="text-xs italic">
                        "<b>Cheaper, faster transportation has been a major lubricator of trade </b>and wealth creation. For almost two centuries, technology has improved transportation relentlessly. Unfortunately, over the past thirty years, there have been no radical advances in transportation technology (in-flight DVD units are nice, but not revolutionary); take, for example, the travel time across the Atlantic which, for the first time since the Industrial Revolution, is getting longer rather than shorter."
                        </p>
                        <p className="text-xs text-right"><a href="https://foundersfund.com/2017/01/manifesto/">- Founders Fund Manifesto</a></p>
                        </div>
                        <p className="">
                            Lufta's airships will compete with cargo planes/ships at scale, while being the first meaningful eco-friendly alternative.
                            With the ability to access remote or infrastructure-limited areas, airships will further open up global trade. 
                        </p>
                    </div>
                    <div className='text-start px-4 sm:px-8 lg:px-16 pb-8'>
                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-8 lg:mb-16">Defence</p>
                        <p className="">
                            Our airships will provide a bird's eye view, offering crucial strategic advantages in surveillance and reconnaissance.
                            With extended flight durations, silent operation, and reduced detectability, they're the next-generation solution for advanced situational awareness.
                            Their ability to carry payloads provides flexibility in mission roles, from delivering vital supplies, deploying assets/munitions, to acting as a communication hub in contested environments.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technology */}
            <div className="w-full h-0.5 bg-black my-4"></div>
        </div>
    );
};

export default Mission;
