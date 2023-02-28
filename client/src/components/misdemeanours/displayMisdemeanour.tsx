import { getMisdemeanourEmoji, Misdemeanour } from "../../types/misdemeanours.types";

interface DisplayMisdemeanourProps {
    misdemeanour: Misdemeanour;
}

const DisplayMisdemeanour: React.FC<DisplayMisdemeanourProps> = ({ misdemeanour }: DisplayMisdemeanourProps) => {

    function getStyle(isSelfConfession: boolean) {
        return isSelfConfession ? 'tr--self-confessed' : 'tr--normal';
    }

    return (
        <>
            {
                <tr className={getStyle(misdemeanour?.confession !== undefined)}>
                    <td>{misdemeanour.citizenId}</td>
                    <td>{misdemeanour.date}</td>
                    <td>{misdemeanour.misdemeanour + " "}{getMisdemeanourEmoji(misdemeanour.misdemeanour)}</td>
                    <td><img alt='Punishment idea' src={misdemeanour.punishmentIdeaImageUrl} /></td>
                    <td>{misdemeanour?.confession}</td>
                </tr>
            }
        </>
    );
}
export default DisplayMisdemeanour;