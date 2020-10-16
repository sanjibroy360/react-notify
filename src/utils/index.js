export default function toastInfoGenerator(
  type,
  icon,
  message,
  position,
  autoClose
) {
  let toastInfo = {
    id: (Math.floor(Math.random() * 1337 * 19 * 13) + 1).toString(36),
    content: message || "Toast",
    type: type || "success",
    iconName: icon || "",
    position: position || "top-right",
    autoClose: autoClose || 3000,
  };
  return toastInfo;
}
