import React from "react";
import Event from './Event'

const Calendar = () => {

    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <td className="time">8 am</td>
                    <Event event="Fancy Dinner" color="green" location="400 Maine ave"/>
                    <td></td>
                    <td></td>
                    <Event event="Start Project" color="pink"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Wash Car" color="pink"/>
                    <td></td>
                    <Event event="Submit hw" color="green"/>
                </tbody>
                <tbody>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <Event event="Do Chores" color="blue"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Clean House" color="green"/>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="COS301 HW" color="green"/>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">3 pm</td>
                    <td></td>
                    <Event event="Take out trash" location="house" color="blue"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Walk michael" color="pink"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>

        </div>
    )
}

export default Calendar;