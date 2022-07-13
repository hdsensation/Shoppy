import React from 'react'
import { Link } from 'react-router-dom'
import { Usecart } from './Cart'

function Header() {
    

    const items = Usecart()
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/'>
                <h1 style={{color:'white'}}>Shoppy-Home</h1>
            </Link>
            <Link to='/cart'>
            <span className="badge text-bg-secondary"><h3>{items.length}</h3></span>

                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAYFBMVEX///8rUTRmgW2mtqrQ2NLp7er8/Pw8X0SAl4Wsu6/l6uZ9lYNScVkzWDxfe2WDmYg5XUJYdl+Ln5Dx8/GcrqBCZEpJalG8yL9demSzwLbb4t1shnJ3j3y4xLvL1M2Up5i4VlGRAAAD/UlEQVRogd1a65qiMAwFQe6IguioCO//ljs24dILpaF2v/32/JoptIemaXKa6nn/Ea7J3TnHo/UP78Ytx9v/oKxDlySxj7g8js5I/Bll3Tsi6fwlitTJdJrC51E5mU5wEGguTxc0YdXyNI48On0tSQI3JJ73rG6zwVyReMvpOFmVEc8ESK4uScYIcHNLksNUMqckIZAMTkmikpGcnZJ4NUylToPvQJkRn/6XcVOtb7vdjwbV1h6+TeIrSMJvcyidSMwwtjipSK7wrLQeHUd4aPzr1BwlXNiTjm+EDF5ILzeYDdUZ/cSexYon0K3mGyvWqPChcu3BByl8QbpGX/GNEO4K6eVeYy3Py+Dpy5Kk01lrtEopp3oSSayz1uRfcupSkiRqknBtEEQDSyY7OGXh0VrrIhuT/UHA68ya2xfXCMGuFF/2V6w4IVVsrX3QqIXIfrsjdEcSUbruhVaR3L9EkuhIvPN3SPRHBHTArkoWQGFe8I0gb+NlW1LDR27oNww8ggxQ7hOQHvw+Qc/RW8uLgEQIxcZhpVZ+owTYx4L0Nia5mFhrSl28aUxJsHO+RYL+VUZ7SFIza03SiNuypiSYKzY5xtTFTfmgIqkkkiN0PWyTeOj/0QIwkyTigDNZtGA+ehuQoL3O8QxoKWMOGEzl1ww4rKW3ibVGZ9+NFZkiILAjMSs5ZFYcpsWAkw2JmbUmadSlI8CrTymHH9bYjv8+8FRgWtRCaTRvPtiMwtFYDPUFyVpTqp8+yiSsbIk6CYFgXhOSTVEnAlPXtK1MSGL+XwPAok5VEAOSJ9VaY9l4qrIZLHxOtZY3nupbpk8qrVqpKvYKOCStzLTzKEwqmN22x1OCYq29IZJkrb26u9oeesLeMNxSivGQgPOXeIjS4zWQitfMtVpKDzpg89bbL9oArOX4Kortb0qk2wE4oji7HADkf8FakEu21b8V0FohHYStaKGHjK9grZSd6UL2NiSmkf5owXGOtsfHqfwmrFjorBqwlF4pKFeVWXPlB8ybTMQx5JmLJiNeukbCTEpFfzGvKWqwemABL3/fUYT8SK9gOekQ3AfUHMQQ0UAv5irHdv5bnkiw+CZisHuwTrizILmIUgd0f4f/MW1DvAllyz4JD2YNUSGE3PyYuCmN/Zdh4JahW37ziDu3DCBqad6lmIkYlHt5JsSVhzXBnZVp1mSkZmtCTKUQWUp2bmhuS8YZ4F1wSsr3eNdY7Kn7flg72sBs/e4dBniWof7KQip8KKKreGNIV1CC4FbVLYUP2SNu6uUAov8CuMRT7NId7znIrq3ocz4o5bSNOKEJfn55zsVVc0V//1xvlLdq/w+SoseQ53WqtUM/VHl9dfrLin8CfwBKVDQuS4qsxQAAAABJRU5ErkJggg==" alt="error" />
                
            </Link>

        </nav>
    )
}

export default Header
