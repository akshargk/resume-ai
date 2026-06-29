function Navbar(){
    return(
        <nav className="flex justify-between items-center p-4">
        <a href="/">ResumeAI</a>
        <div className="flex gap-6">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#upload">Upload Resume</a>
        </div>
        </nav>
    )
}

export default Navbar;