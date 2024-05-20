import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {

    const location = useLocation()
    
    return (
        <div className="mainview">
            <div className="main"><h1 className="GRS">Grievance Redressal System</h1>
            </div>
            <div className="part">
                <div className="part1"><p className="up">The Grievance Redressal Cell (GRC) aims to look into the complaints lodged by any student and redress it as per requirement. The students can state their grievance regarding any academic and non- academic matter within the campus through the online and grievance suggestion box.</p><p className="down"> The institution aims at solving the grievances of the students within stipulated tacademic and non- academic matter within the campus through the online and grievance/ suggestion box. The institution aims at solving the grievances of the students within stipulated time.</p>
                    <div className="scope">
                        <h1 className="heading">Scope Of GRS</h1>
                        <ul className="s-bodylist">
                            <li className="l">Academic Matters: Related to timely issue of duplicate Mark-sheets, Transfer Certificates, Conduct Certificates or other examination related matters.</li>
                            <li className="l">Financial Matters: Related to dues and payments for various items from library, hostels etc.</li>
                            <li className="l">Other Matters: Related to certain misgivings about conditions of sanitation, preparation of food, availability of transport, victimization by teachers etc.</li>
                        </ul>
                    </div></div>
                <div className="part2">
                    <h1 className="heading">Objective in-detail</h1>
                    <ul className="bodylist">
                        <li className="l">Upholding the dignity of the College by ensuring strife free atmosphere in the College through promoting cordial Student-Student relationship and Student-teacher relationship etc.</li>
                        <li className="l">Encouraging the Students to express their grievances / problems freely and frankly, without any fear of being victimized.</li>
                        <li className="l">Suggestion / complaint Box is installed in front of the Administrative Block in which the Students, who want to remain anonymous, put in writing their grievances and their suggestions for improving the  Academics / Administration in the College.</li>
                        <li className="l">Advising Students of the College to respect the right and dignity of one another and show utmost restraint and patience whenever any occasion of rift arises.</li>
                        <li className="l">Advising all the Students to refrain from inciting Students against other Students, teachers and College administration.</li>
                        <li className="l">Advising all staffs to be affectionate to the Students and not behave in a vindictive manner towards any of them for any reason.</li>
                        <li className="l">Ragging in any form is strictly prohibited in and outside the institution. Any violation of ragging and disciplinary rules should be urgently brought to the notice of the Principal.</li>
                    </ul>
                </div>
            </div>
            <div className="table">
                <h1 className="heading">Grievance Appeal and Redressal Committee Members</h1>
                <table><tr><th>Name</th><th>Designation</th><th>Position</th><th>Email ID</th></tr>
                    <tr><td>Mr. Priyanshu Dubey</td><td>CEO</td><td>Head</td><td>Dubeypriyanshu180@gmail.com</td></tr>
                    <tr><td>Mr. Avinash Chaurashiya</td><td>Director</td><td>Manager</td><td>kaluamaster420@gmail.com</td></tr>
                    <tr><td>Mr. Shobhit Kumar Jha</td><td>Member</td><td>Investigator</td><td>Lyfer@gmail.com</td></tr>
                </table>
            </div>
        </div>
    )
};
export default Home;