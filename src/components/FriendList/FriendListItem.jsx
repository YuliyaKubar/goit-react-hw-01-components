import css from 'components/FriendList/friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return ( <li key={id} className={css.item}>
  <span className ={isOnline ? css.online : css.offline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{ name}</p>
</li>
)}
