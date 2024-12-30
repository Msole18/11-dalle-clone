interface FormFieldProps {
  labelName: string
  name: string
  type: string
  placeholder: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSurpriseMe: boolean
  handleIsSurpriseMe: () => void
}

export const FormField = ({
  labelName,
  name,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleIsSurpriseMe,
}: FormFieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="font-semibold text-xs bg-[#eceecf1] py-1 px-2 rounded-[5px] text-black"
            onClick={handleIsSurpriseMe}
          >
            Surprise me
          </button>
        )}
        <input
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-full p-3"
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          required
          type={type}
          value={value}
        />
      </div>
    </div>
  )
}
