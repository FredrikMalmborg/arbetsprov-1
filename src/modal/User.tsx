import React from 'react'
import { User as TUser } from '../../types/types'

interface Props {
    user: TUser | null
}

const User = ({ user }: Props) => {

    return (
        <div className="user_wrapper">
            <div className="user_profile" />

            <div className="user_info">
                <h4>

                    <span>
                        user:
                    </span>
                    {user?.username || "unknown"}
                </h4>
                <p>
                    <span>
                        email:
                    </span>
                    {user?.email || "unknown"}
                </p>
                <p>
                    <span>
                        phone:
                    </span>
                    {user?.phone || "unknown"}
                </p>
                <p>
                    <span>
                        website:
                    </span>
                    {user?.website || "unknown"}
                </p>
                <p>
                    <span>
                        company:
                    </span>
                    {user?.company ?
                        <>
                            {user.company.name + " | " + user.company.bs}
                            <em>
                                {' -"' + user.company.catchPhrase + '"'}
                            </em>
                        </>
                        : "unknown"
                    }
                </p>

                <hr style={{ marginTop: '1em' }} />
            </div>
        </div>
    )
}

export default User
