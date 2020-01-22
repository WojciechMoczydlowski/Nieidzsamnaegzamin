import { UserContext } from "$components/AuthenticationGuard";
import Container from "$components/Container";
import ExamTag from "$components/ExamTag";
import PrayTile from "$components/PrayTile";
import firebaseClient from "$configuration/firebase.ts";
import * as moment from "moment";
import React, { useContext, useEffect, useState } from "react";
const PrayTable: React.FunctionComponent = props => {
    const [exams, setExams] = useState();
    const currentUser = useContext(UserContext);
    useEffect(() => {
        const db = firebaseClient
            .firestore()
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .onSnapshot(function(doc) {
                const item = doc.docs.map(item => item.data());
                setExams(item);
            });
        return () => {
            db();
        };
    }, []);

    const yourExams = exams && exams.filter(exam => exam.ownerName === currentUser.displayName);

    const youSupport = exams && exams.filter(exam => exam.support && exam.support.includes(currentUser.displayName));
    const others =
        exams &&
        exams
            .filter(el => !yourExams.includes(el))
            .filter(el => !youSupport.includes(el))
            .sort((a, b) => moment.utc(a.date).diff(moment.utc(b.date)))
            .filter(el => moment.utc(el.date).isAfter(new Date()));
    const oldExams =
        exams &&
        exams
            .filter(el => moment.utc(el.date).isBefore(new Date()))
            .sort((a, b) => moment.utc(a.date).diff(moment.utc(b.date)));
    return (
        <Container>
            {youSupport && (
                <>
                    <ExamTag title={"Wspierasz"} />
                    {youSupport.map((item, i) => (
                        <PrayTile exam={item} key={i} />
                    ))}
                </>
            )}
            <ExamTag title={"Twoje egzaminy"} />
            {yourExams && yourExams.map((item, i) => <PrayTile exam={item} key={i} />)}
            <ExamTag title={"Wesprzyj"} />
            {others && others.map((item, i) => <PrayTile exam={item} key={i} />)}
            <ExamTag title={"Odbyły się"} />
            {oldExams && oldExams.map((item, i) => <PrayTile exam={item} key={i} />)}
        </Container>
    );
};

export default PrayTable;
