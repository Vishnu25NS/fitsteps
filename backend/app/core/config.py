from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "FitSteps API"

    API_V1_PREFIX: str = "/api/v1"

    DATABASE_URL: str = "sqlite:///./fitsteps.db"

    FRONTEND_URL: str = "http://localhost:5173"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


settings = Settings()