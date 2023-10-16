import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ProfileDoctor.scss'
import { getProfileDoctorById } from '../../../services/userService'
import { LANGUAGES } from '../../../utils'
import NumberFormat from 'react-number-format';

class ProfileDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileDoctor: {}
        }
    }

    async componentDidMount() {
        let profileDoctor = await this.getInfoDoctor(this.props.doctorId)
        this.setState({
            profileDoctor
        })
    }

    getInfoDoctor = async (doctorId) => {
        let result = {}
        if (doctorId) {
            let res = await getProfileDoctorById(doctorId)
            if (res && res.errCode === 0) {
                result = res.data
            }
        }
        return result
    }

    componentDidUpdate(prevProps) {
        if (prevProps.doctorId !== this.props.doctorId) {

        }
    }

    render() {
        let { profileDoctor } = this.state
        let { language } = this.props
        let nameVi = '', nameEn = ''
        let priceVi = profileDoctor && profileDoctor.Doctor_info && language === LANGUAGES.VI ?
            profileDoctor.Doctor_info.priceData.valueVi : ''
        let priceEn = profileDoctor && profileDoctor.Doctor_info && language === LANGUAGES.EN ?
            profileDoctor.Doctor_info.priceData.valueEn : ''
        if (profileDoctor && profileDoctor.positionData) {
            nameVi = `${profileDoctor.positionData.valueVi}, ${profileDoctor.lastName} ${profileDoctor.firstName}`
            nameEn = `${profileDoctor.positionData.valueEn}, ${profileDoctor.firstName} ${profileDoctor.lastName}`
        }
        return (
            <div className='profile-doctor-container'>
                <div className='intro-doctor'>
                    <div
                        className='content-left'
                        style={{
                            backgroundImage: `url(${profileDoctor && profileDoctor.image ? profileDoctor.image : " "})`,
                        }}
                    >

                    </div>
                    <div className='content-right'>
                        <div className='up'>
                            {language === LANGUAGES.EN ? nameEn : nameVi}
                        </div>
                        <div className='down'>
                            {profileDoctor && profileDoctor.Markdown && profileDoctor.Markdown.description
                                && <span>
                                    {profileDoctor.Markdown.description}
                                </span>
                            }
                        </div>
                    </div>

                </div>
                <div className='price'>
                    Giá khám: <NumberFormat
                        value={language === LANGUAGES.VI ? priceVi : priceEn}
                        displayType={'text'} thousandSeparator={true}
                        suffix={language === LANGUAGES.VI ? 'VND' : '$'}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
