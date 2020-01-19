import { UserContext } from "$components/AuthenticationGuard";
import Container from "$components/Container";
import ExamTag from "$components/ExamTag";
import PrayTile from "$components/PrayTile";
import firebaseClient from "$configuration/firebase.ts";
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
    const others = exams && exams.filter(el => !yourExams.includes(el)).filter(el => !youSupport.includes(el));

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
            <ExamTag title={"Pozostałe"} />
            {others && others.map((item, i) => <PrayTile exam={item} key={i} />)}
        </Container>
    );
};

export default PrayTable;
