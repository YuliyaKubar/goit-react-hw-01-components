import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats}) => {
    return ( <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statlist}>
            {stats.map(stat => (
                <li key={stat.id} className={css.item} >
                    <span className="label">{ stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
        </li>))}
    </ul>
    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}