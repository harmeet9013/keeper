function CheckLaunchStatus({ firstLaunch }) {
    if (firstLaunch === true) {
        return (
            <h1
                style={{
                    color: "black",
                    marginTop: "-20px",
                    fontSize: "40px",
                    fontStyle: "italic",
                }}
            >
                Create some notes!
            </h1>
        );
    }
    return null;
}

export default CheckLaunchStatus;
