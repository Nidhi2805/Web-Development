import React from 'react';

const Explore = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh', width: '80%', margin: '-6rem 0 ' }}>
            {/* Left-side Image */}
            <img 
                src="/explore.png" 
                alt="Explore Image" 
                style={{ width: '36%', height: 'auto', objectFit: 'cover' }}
            />
            
            {/* Right-side Content */}
            <div style={{ flex: 1, paddingLeft: '3rem', display: 'flex', flexDirection: 'column', marginTop: "-3rem" }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Artfully Crafted</h1>
                <p style={{ fontSize: '1.25rem', color: '#555', marginTop: "-1rem" }}>
                    Explore our diverse menu, featuring a wide array of mouthwatering dishes
                </p>

                {/* Boxes Section */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', marginTop: '1.5rem' }}>
                    {[
                        { img: "/apple.png", text: "Explore Our Menu", desc: "Discover a world of culinary delights, from classic favorites to innovative " },
                        { img: "/lettuce.png", text: "Browse Our Selection", desc: "Indulge in the flavors of our expertly prepared dishes, each one a testament to our " },
                        { img: "/apple.png", text: "Savor The Difference", desc: "Experience the perfect balance of taste and nutrition in every bite with our carefully curated " }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                width: '18rem',
                                height: "10rem", 
                                backgroundColor: 'white', 
                                border: '2px solid grey', 
                                padding: '1rem', 
                                textAlign: 'left',
                                borderRadius: '8px',
                                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'left',
                                gap: '0.5rem'
                            }}
                        >
                            <img 
                                src={item.img} 
                                alt={item.text} 
                                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                            />
                            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'black', marginTop: '0.2rem' }}>
                                {item.text}
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#777',marginTop: "-1rem" }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
