import { Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


export function Semester(props) {
    return (



        <Container fluid className='mb-5 mt-3'>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th className="bg-primary text-white fs-5 p-2 text-center">
                            {props.text}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fs-6 p-3">
                            {" "}
                            <strong>B23-CAP-CTS-201</strong> Object Oriented Programming using
                            C++ Practical
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-CAP-CTS-202</strong> Introduction to Web technologies
                            Practical
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-CAP-CTS-203</strong> Concept of Operating System
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-CAP-CTS-204</strong> Mathematical Foundations for
                            Computer science
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-AEC-E-201</strong> English Language and Communication
                            Level-2
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-BBA-MDC-204</strong> Enterpreneurship & Start-ups
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-SEC-207</strong> Soft Skills
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-6 p-3">
                            <strong>B23-VAC-201</strong> Environmental Studies
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}