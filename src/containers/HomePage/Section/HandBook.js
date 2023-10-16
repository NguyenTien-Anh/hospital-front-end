import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class HandBook extends Component {

    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <span>Thần kinh 1</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <span>Thần kinh 2</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <span>Thần kinh 3</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <span>Thần kinh 4</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <span>Thần kinh 5</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
