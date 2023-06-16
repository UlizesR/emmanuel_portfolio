import React from 'react'

const Section = (props) => {
    const { children, styles } = props
    return (
        <section className={`h-screen ${styles}`}>
            {children}
        </section>
    )
}

export default Section