# Wellora Frontend

A responsive React + TypeScript healthcare routine tracker for multiple family profiles. This frontend currently uses realistic in-memory mock data and is structured for a future FastAPI API.

## Included

- Demo login and registration UI
- Multiple family profiles
- Medicine and stock tracking
- Daily dose actions with stock adjustment
- Streaks and achievement milestones
- Adherence charts
- Period records and disclaimers
- Notifications and settings
- Responsive sidebar and mobile drawer

## Demo login

- Email: `demo@wellora.app`
- Password: `Demo123!`

## Run locally

```bash
cd wellora/frontend
copy .env.example .env
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## FastAPI integration

Set:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_USE_MOCK_API=false
```

The `src/api` directory contains the Axios foundation. Replace the local context actions with TanStack Query hooks calling those modules when the backend is ready.

## Notes

Wellora is an organisational tool and does not provide medical diagnosis, treatment, contraception guidance, or emergency advice.
