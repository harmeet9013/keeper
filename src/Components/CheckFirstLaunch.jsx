function CheckLaunchStatus({firstLaunch}) {
    if (firstLaunch === true) {
        return <h1 style={{ color: "black" }}>Create some notes!</h1>;
    }
    return null;
}

export default CheckLaunchStatus;