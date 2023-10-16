import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import specialtyImg from '../../../assets/specialty/than-kinh.jpg'

class Specialty extends Component {

    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 1</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 2</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 3</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 4</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 5</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <span>Thần kinh 6</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
