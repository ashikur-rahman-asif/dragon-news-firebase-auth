import React from 'react';
import qZone1 from '../../../../public/assets/qZone1.png'
import qZone2 from '../../../../public/assets/qZone2.png'
import qZone3 from '../../../../public/assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary mt-3 '>
            <h4>Q-zone</h4>
            <div className='text-center'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;