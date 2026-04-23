import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const contact = formData.get('contact') as string
    const email = formData.get('email') as string | null
    const service = formData.get('service') as string
    const file = formData.get('file') as File | null

    // Валидация обязательных полей
    if (!name || !contact || !service) {
      return NextResponse.json(
        { error: 'Не заполнены обязательные поля' },
        { status: 400 }
      )
    }

    // Здесь должна быть реальная отправка в CRM/почту
    // Для демо просто логируем и возвращаем успех
    console.log('New contact request:', { name, contact, email, service, fileName: file?.name })

    // Имитация задержки обработки
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({ success: true, message: 'Заявка принята' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}