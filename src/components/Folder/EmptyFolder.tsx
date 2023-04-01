import { FolderNotch } from "@phosphor-icons/react"

const EmptyFolder = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <FolderNotch size={100} color="#a3a3a3" weight="light"/>
      <h1 className="font-semibold text-[#a3a3a3]">Create Your First Folder</h1>
    </div>
  )
}

export default EmptyFolder
