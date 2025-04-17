import Class from "./Avatar.module.scss";

const Avatar = ({ w, h,  src, alt, props }) => {
  return (
    <img
      className={Class.avatar}
      width={w ? w : "32"}
      height={h ? h : "32"}
      src={src ? src : "/avatars/AvatarDefault.svg"}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
