import Container from "$components/Container";
import ExamTag from "$components/ExamTag";
import PrayTile from "$components/PrayTile";
import firebaseClient from "$configuration/firebase.ts";
import React, { useEffect, useState } from "react";

const PrayTable: React.FunctionComponent = props => {
    const [exams, setExams] = useState();
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

    return (
        <Container>
            <ExamTag title={"Wpierasz"} />
            {exams && exams.map(item => <PrayTile exam={item} />)}
            <ExamTag title={"Twoje egzaminy"} />
            {exams && exams.map(item => <PrayTile exam={item} />)}
            <ExamTag title={"Pozostałe"} />
            {exams && exams.map(item => <PrayTile exam={item} />)}
        </Container>
    );
};

export default PrayTable;
