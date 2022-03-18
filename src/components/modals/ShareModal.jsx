import React from "react"
import close from "../../assets/images/close.png"
import face from "../../assets/images/shareModal/facebook (3) 1.svg"
import twitter from "../../assets/images/shareModal/twitter (1) 1.svg"
import vk from "../../assets/images/shareModal/vk 2.svg"
import copy from "../../assets/images/shareModal/copy 1.svg"
export default function ShareModal() {
    const socials = [
        {href:'#',img:face,alt:"fb"},
        {href:'#',img:twitter,alt:"twitter"},
        {href:'#',img:vk,alt:"vk"},
        {href:'#',img:copy,alt:"copy"},
    ]
    return <div className="modal modal--no-scroll">
        <div className="modal__content">
            <button
                className="modal__close">
                <img src={close} alt="close"/>
            </button>
            <ul className="social">
                {socials.map(social => <li className="social__item">
                    <a className="social__link" href={social.href} target="_blank">
                        <img src={social.img} alt={social.alt}/>
                    </a>
                </li>)}
            </ul>
        </div>
    </div>
}