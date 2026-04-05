export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-primary-700 border-t-primary-400 rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">Carregando...</p>
      </div>
    </div>
  )
}
