import React from 'react';
import Question from './question';

class Quizz extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            total: 0,
            quizz: [
                {
                    question: "Le majordome te conduit à ta chambre en attendant le reste des convives. Seul...Le son d'une boite à musique lugubre se fait retentir derrière la porte de ta salle de bain. Que fais-tu ?",
                    check1:"Tu ouvres la porte en cherchant comment arrêter la mélodie",
                    check2:"tu ignores la musique, installes une enceinte sur la table et fais péter un bon grand rock en attendant tes amis",
                    check3:"Tu quitte la pièce pour rejoindre le majordome à toute jambes",
                    value1: 1,
                    value2: 2,
                    value3: 3
                },
                {
                    question: "Le clown Penny Wise ricane sous ton lit, alors que tu te repose d'une dure jounrnée à la wild, que fais-tu ?", 
                    check1: "tu te cache sous ta couette en te disant qu'il se lassera avant toi, mais en faisant gaffe à ne faire dépasser ni bras ni orteils",
                    check2: "tu va le rejoindre sous le lit pour lui faire part de ton ardent désir pour les clowns",
                    check3: "tu lui fais la causette et lui propose de venir boire un pot",
                    value1: 1,
                    value2: 2,
                    value3: 3
                },
                {
                    question: "En rentrant chez toi, tu passe devant le cimetière, des feux-follet soudain un grognement se laisse entendre et tu obsérve une main sortir de terre. Que fais-tu ?",
                    check1:"tu penses que c'est un enterré vivant et te dépêche de lui venir en aide",
                    check2:"tu lui tapes un check...normal gros !",
                    check3:"tu tapes un genoux épaules jusqu'à chez toi en ne passant à rien à part déguerpir.",
                    value1: 1,
                    value2:2,
                    value3:3
                },
                {
                    question: "En te lavant les dents devant le miroir, tu constate que ton reflet n'a pas de brosse à dents et te regarde fixement. Que fais-tu?",
                    check1:"tu décides résolument d'arrêter l'apéro",
                    check2:"tu lui fournit gentiment une brosse à dent",
                    check3:"tu fermes les yeux un instant espérant qu'il disparaisse en doutant de ce que tu as vu",
                    value1: 1,
                    value2:2,
                    value3:3
                },
                {
                    question: "Tu rentres chez toi avec ta grand mère perchée au plafond",
                    check1:"tu appels un exorciste",
                    check2:"tu décide d'arrêter de laisser trainer de la drogue partout ,mais aprés réflexion arrêter la drogue s'impose !",
                    check3:"tu décroche le fusil de papi du mur et la plombe comme un chevreuil.",
                    value1:1,
                    value2:2,
                    value3:3
                },
            ]
        }
        };

    render(){
        let {quizz} = this.state;
        const quizzInfos = quizz.map(quizz => {return <div><Question quizz={quizz}/></div>});
        return <div> {quizzInfos}
        <button type="button">Obtenir les résultats !</button></div>;
    }
    }

export default Quizz;