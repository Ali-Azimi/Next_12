

const ContactDetail = async (props) => {
    const params = await props.params;
    return <h1>CONTACT DETAIL {params.id}</h1>
}


export default ContactDetail;