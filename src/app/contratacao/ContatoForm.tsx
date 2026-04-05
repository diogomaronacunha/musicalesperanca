'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  nome: string
  telefone: string
  email: string
  tipoEvento: string
  data: string
  cidade: string
  estado: string
  publico: string
  mensagem: string
}

const initialForm: FormData = {
  nome: '',
  telefone: '',
  email: '',
  tipoEvento: '',
  data: '',
  cidade: '',
  estado: '',
  publico: '',
  mensagem: '',
}

type Status = 'idle' | 'sending' | 'success' | 'error'

function getTodayString() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export default function ContatoForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const minDate = getTodayString()

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      // Formspree: substituir YOUR_FORM_ID pelo ID real
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="card p-8">
      <h2 className="font-display text-2xl font-bold text-white mb-2">Solicitar Orçamento</h2>
      <p className="text-gray-400 text-sm mb-8">Todos os campos marcados com * são obrigatórios.</p>

      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-white font-semibold text-xl mb-2">Mensagem enviada!</h3>
          <p className="text-gray-400">
            Recebemos seu pedido de orçamento. Entraremos em contato em até 24 horas.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-outline mt-6"
          >
            Enviar outro pedido
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados pessoais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                name="telefone"
                required
                value={form.telefone}
                onChange={handleChange}
                placeholder="(xx) xxxxx-xxxx"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Evento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tipo de evento *
              </label>
              <select
                name="tipoEvento"
                required
                value={form.tipoEvento}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                <option value="">Selecione o tipo</option>
                <option>Baile / Dança</option>
                <option>Festa de Aniversário</option>
                <option>Casamento</option>
                <option>Festa de CTG</option>
                <option>Festa Junina</option>
                <option>Evento Corporativo</option>
                <option>Quermesse / Festa Comunitária</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Data do evento *
              </label>
              <input
                type="date"
                name="data"
                required
                min={minDate}
                value={form.data}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cidade *
              </label>
              <input
                type="text"
                name="cidade"
                required
                value={form.cidade}
                onChange={handleChange}
                placeholder="Cidade do evento"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Estado *
              </label>
              <select
                name="estado"
                required
                value={form.estado}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                <option value="">Selecione</option>
                <option value="SC">Santa Catarina</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="PR">Paraná</option>
                <option value="Outro">Outro estado</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Público estimado
            </label>
            <select
              name="publico"
              value={form.publico}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-primary-500 transition-colors"
            >
              <option value="">Estimativa de pessoas</option>
              <option>Até 50 pessoas</option>
              <option>50 a 100 pessoas</option>
              <option>100 a 300 pessoas</option>
              <option>300 a 500 pessoas</option>
              <option>Mais de 500 pessoas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensagem / Informações adicionais
            </label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Descreva seu evento, horário, local, pedidos especiais de repertório..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4 text-red-300 text-sm">
              Erro ao enviar. Por favor, tente novamente ou entre em contato diretamente por telefone.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando...
              </>
            ) : (
              'Solicitar Orçamento'
            )}
          </button>
        </form>
      )}
    </div>
  )
}
