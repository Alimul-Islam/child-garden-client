import React from 'react';

const CurriculumDetails = (props) => {
    const { title, Class, img } = props.Cur;

    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{Class}</h6>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
            </div>

        </div>
    );
};

export default CurriculumDetails;